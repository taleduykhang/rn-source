/**
 * All custom exceptions should extend this class.
 */
export default class BaseException extends Error {
  private _status: Nullable<number | string>;
  private _message: Nullable<string>;
  private _url: Nullable<string>;
  private _originalError: Nullable<any>;
  public _type = 'BaseException';

  get status() {
    return this._status;
  }

  get message() {
    return this._message || 'unknown';
  }

  get url() {
    return this._url;
  }

  get originalError(): Nullable<any> {
    return this._originalError;
  }

  constructor(
    status: Nullable<number | string> = 'unknown',
    message: Nullable<string> = 'unknown',
    url: Nullable<string> = 'unknown',
    originalError: Nullable<any>,
  ) {
    super(message ?? undefined);

    this._status = status;
    this._message = message;
    this._url = url;
    this._originalError = originalError;
  }
}
