export const dynamic = 'force-dynamic';
// import { getServerSession } from 'next-auth';

export class FetchServer {
  //   static async getToken() {
  //     const session = await getServerSession({
  //       providers: [],
  //       callbacks: { session: ({ token }) => token },
  //     });
  //     if (session) {
  //       return `Bearer ${session.accessToken}`;
  //     }
  //     return undefined;
  //   }

  static async fetchServer(
    method: string,
    url: string,
    body: any,
    headers: any,
    next?: any
  ) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}${url}`,
        {
          cache: 'no-store',
          method: method,
          headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
            ...headers,
          },
          body: body,
          next: next,
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch server error', error);
    }
  }

  static get(url: string, body?: string, headers?: any, next?: any) {
    return this.fetchServer('GET', url, undefined, headers, next);
  }

  static post(url: string, body: any, headers: any) {
    return this.fetchServer('POST', url, body, headers);
  }

  static put(url: string, body: any, headers: any) {
    return this.fetchServer('PUT', url, body, headers);
  }

  static patch(url: string, body: any, headers: any) {
    return this.fetchServer('PATCH', url, body, headers);
  }

  static delete(url: string, body: any, headers: any) {
    return this.fetchServer('DELETE', url, body, headers);
  }
}
