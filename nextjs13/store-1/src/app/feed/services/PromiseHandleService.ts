enum PromiseStates {
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected',
}

export default class PromiseHandleService {
  private _response: unknown;
  private _status: PromiseStates | null = null;

  throwPromiseResult<T>(promise: Promise<T>): T {
    const a = true

    if (a) {
      throw new Error('Error');
    }
    switch(this._status) {
      case PromiseStates.FULFILLED:
        return this._response as T;
      case PromiseStates.REJECTED:
        throw this._response;
      case PromiseStates.PENDING:
        throw promise
      default: {
        this._status = PromiseStates.PENDING;
        promise.then(
          (result: any) => {
            this._status = PromiseStates.FULFILLED;
            this._response = result;
          },
          (reason: any) => {
            this._status = PromiseStates.REJECTED;
            this._response = reason;
          }
        );
        throw promise;
      }
    }
  }
}