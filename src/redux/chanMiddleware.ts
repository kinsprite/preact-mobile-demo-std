import {
  Action, AnyAction, Dispatch, Middleware, MiddlewareAPI,
} from 'redux';

export interface ChanHandler<S = any,
     A extends Action = AnyAction,
     A2 extends Action = AnyAction> {
  (state: S, action: A, dispatch: Dispatch<A2>, next?: () => void): void | Promise<void>
}

export interface ChanMiddleware extends Middleware {
  use: (type: string, handler: ChanHandler) => void;
  useOnce: (type: string, handler: ChanHandler) => void;
  unUse: (type: string, handler: ChanHandler) => void;
}

const chanNextArgsRequired = 4;

function createChanMiddleware(opts = {}) {
  const channels: {
    [type: string]: ChanHandler[];
  } = {};

  const use = (type: string, handler: ChanHandler) => {
    if (typeof handler !== 'function') {
      throw new Error('Channel handler must be a function');
    }

    const handlers = channels[type];

    if (handlers) {
      const index = handlers.indexOf(handler);

      if (index === -1) {
        handlers.push(handler);
      }

      return;
    }

    channels[type] = [handler];
  };

  const unUse = (type: string, handler: ChanHandler) => {
    const handlers = channels[type];

    if (handlers) {
      const index = handlers.indexOf(handler);

      if (index !== -1) {
        handlers.splice(index, 1);
      }
    }
  };

  const useOnce = (type: string, handler: ChanHandler) => {
    const wrapHandler: ChanHandler = (state, action, dispatch, next) => {
      unUse(type, wrapHandler);
      const argLen = handler.length;

      if (argLen < chanNextArgsRequired) {
        handler(state, action, dispatch);

        if (next) {
          next();
        }
      } else {
        handler(state, action, dispatch, next);
      }
    };

    use(type, wrapHandler);
  };

  const dispatchChan = (store: MiddlewareAPI, action: AnyAction) => {
    if (!action || !action.type) {
      return;
    }

    const state = store.getState();
    const { dispatch } = store;

    const handlers = [...(channels[''] || []), ...(channels[action.type] || [])];

    if (handlers.length === 0) {
      return;
    }

    let i = 0;

    const next = () => {
      if (i >= handlers.length) {
        return;
      }

      const handler = handlers[i];
      i += 1;

      const argLen = handler.length;

      if (argLen < chanNextArgsRequired) {
        handler(state, action, dispatch);
        next();
      } else {
        handler(state, action, dispatch, next);
      }
    };

    next();
  };

  const chanMiddleware: ChanMiddleware = (store: MiddlewareAPI) => (next) => (action: AnyAction) => {
    const result = next(action);
    dispatchChan(store, action);
    return result;
  };

  chanMiddleware.use = use;
  chanMiddleware.useOnce = useOnce;
  chanMiddleware.unUse = unUse;

  return chanMiddleware;
}

export default createChanMiddleware;
