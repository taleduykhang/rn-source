/* eslint-disable @typescript-eslint/no-unused-vars */
import {ApiResponse, ApisauceInstance, create} from 'apisauce';
import {DEFAULT_API_CONFIG} from './api-config';
import HttpException from './HttpException';

const instance = create({
  baseURL: DEFAULT_API_CONFIG.url,
  timeout: DEFAULT_API_CONFIG.timeout,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

type GetArgs = Parameters<ApisauceInstance['get']>;

type PostArgs = Parameters<ApisauceInstance['post']>;

type PutArgs = Parameters<ApisauceInstance['put']>;

type PatchArgs = Parameters<ApisauceInstance['patch']>;

type DeleteArgs = Parameters<ApisauceInstance['delete']>;

/**
 * Wrapper around API instance.
 * By default, apisauce does not throw on failure.
 *
 * In order for react-query to correctly return the error,
 * the fetcher needs to throw on failure.
 */
const apisauce: ApisauceInstance | any = {
  /**
   * We're forwarding the types and arguments and then throwing on error.
   */

  ...instance,
  get: async <T>(...args: GetArgs) => {
    const res = (await instance.get(...args)) as ApiResponse<T>;
    return util.throwOnError<T>(res);
  },
  post: async <T>(...args: PostArgs) => {
    const res = (await instance.post(...args)) as ApiResponse<T>;
    return util.throwOnError<T>(res);
  },
  put: async <T>(...args: PutArgs) => {
    const res = (await instance.put(...args)) as ApiResponse<T>;
    return util.throwOnError<T>(res);
  },
  patch: async <T>(...args: PatchArgs) => {
    const res = (await instance.patch(...args)) as ApiResponse<T>;
    return util.throwOnError<T>(res);
  },
  delete: async <T>(...args: DeleteArgs) => {
    const res = (await instance.delete(...args)) as ApiResponse<T>;
    return util.throwOnError<T>(res);
  },
  // override more methods as needed
};

const util = {
  throwOnError: <T>(response: ApiResponse<T>) => {
    if (!response.ok) {
      const error = new HttpException(
        response.status || 'unknown',
        response.problem,
        response.config?.url || 'unknown',
        response.data,
      );
      const err = {status: response.status || 'unknown', data: response.data};

      __DEV__ && console.log('response.status', response.status);
      // console.log("response.headers,response.headers", response.headers)

      // if (response.status === 401) {
      //   NotifyToast.current?.showMessage({
      //     message: t("Phiên đăng nhập hết thời gian, vui lòng đăng nhập lại"),
      //     type: "warning",
      //   })
      //   // remove(KEY_TOKEN)

      //   // navigate("noSignIn")
      // }
      throw err;
    } else {
      // all good!
      return response.data;
    }
  },
};

export {apisauce, instance};
