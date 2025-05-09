import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ApiResponse } from '../../utils/enums/enums';

const httpOptions = {
  headers: new HttpHeaders(),
};

/**
 * Base service class that provides common HTTP methods with error handling
 * Extends this class to create specific services with CRUD operations
 */
@Injectable({ providedIn: 'root' })
export class BaseService {
  constructor(protected http: HttpClient) {}

  /**
   * Get method with error handling
   * @param url - The URL to fetch data from
   * @param params - The parameters to send with the request
   * @returns An Observable of the response data
   */
  public get<T>(url: string, params?: unknown, errorHandler?: (error: HttpErrorResponse) => Observable<never>): Observable<ApiResponse<T>> {
    return this.http
      .get<ApiResponse<T>>(url, {
        headers: httpOptions.headers,
        params: params as HttpParams,
      })
      .pipe(
        catchError((error) => {
          if (typeof errorHandler === 'function') {
            return errorHandler(error);
          }
          return this.handleError(error);
        }),
      );
  }

  /**
   * Post method with error handling
   * @param url - The URL to send the request to
   * @param body - The body of the request
   * @param params - The parameters to send with the request
   * @returns An Observable of the response data
   */
  public post<T>(url: string, body: unknown, params: unknown = {}, errorHandler?: (error: HttpErrorResponse) => Observable<never>): Observable<ApiResponse<T>> {
    return this.http
      .post<ApiResponse<T>>(url, body, {
        headers: httpOptions.headers,
        params: params as HttpParams,
      })
      .pipe(
        catchError((error) => {
          if (typeof errorHandler === 'function') {
            return errorHandler(error);
          }
          return this.handleError(error);
        }),
      );
  }

  /**
   * Put method with error handling
   * @param url - The URL to send the request to
   * @param body - The body of the request
   * @param params - The parameters to send with the request
   * @returns An Observable of the response data
   */
  public put<T>(url: string, body: unknown, params: unknown = {}, errorHandler?: (error: HttpErrorResponse) => Observable<never>): Observable<ApiResponse<T>> {
    return this.http
      .put<ApiResponse<T>>(url, body, {
        headers: httpOptions.headers,
        params: params as HttpParams,
      })
      .pipe(
        catchError((error) => {
          if (typeof errorHandler === 'function') {
            return errorHandler(error);
          }
          return this.handleError(error);
        }),
      );
  }

  /**
   * Delete method with error handling
   * @param url - The URL to send the request to
   * @returns An Observable of the response data
   */
  public delete<T>(url: string, params: unknown = {}, errorHandler?: (error: HttpErrorResponse) => Observable<never>): Observable<ApiResponse<T>> {
    return this.http
      .delete<ApiResponse<T>>(url, {
        headers: httpOptions.headers,
        params: params as HttpParams,
      })
      .pipe(
        catchError((error) => {
          if (typeof errorHandler === 'function') {
            return errorHandler(error);
          }
          return this.handleError(error);
        }),
      );
  }

  /**
   * Handle error method
   * @param error - The error to handle
   * @returns An Observable with a user-facing error message
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log('error :' + error);
      console.error(`Backend returned code ${error.status}, ` + `body was: ${JSON.stringify(error.error)}`);
    }
    return throwError(() => JSON.stringify(error.error));
  }
}