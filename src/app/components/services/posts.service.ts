import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private dbUrl = '../assets/db.json';

  async getPosts(): Promise<any[]> {
    try {
      const response = await fetch(this.dbUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      
      return data as any[];
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
}
