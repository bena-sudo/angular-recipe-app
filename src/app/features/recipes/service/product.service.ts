import { Injectable } from '@angular/core';
import { SupabaseService } from '../../../core/services/supabase.service';
import { Product } from '../../../core/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly table: string = 'product';

  constructor(private readonly supabase: SupabaseService) {}

  async getProducts(): Promise<Product[]> {
    const { data, error } = await this.supabase.client
      .from(this.table)
      .select('*');

    if (error) {
      throw new Error(error.message);
    }

    return data || [];
  }

  async getProductById(id: string): Promise<Product | null> {
    const { data, error } = await this.supabase.client
      .from(this.table)
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  async createProduct(product: Product): Promise<Product[] | null> {
    const { data, error } = await this.supabase.client
      .from(this.table)
      .insert([product]);

    if (error) {
      throw new Error(error.message);
    }

    return data ?? null;
  }

  async updateProduct(
    id: string,
    updates: Partial<Product>
  ): Promise<Product[] | null> {
    const { data, error } = await this.supabase.client
      .from(this.table)
      .update(updates)
      .eq('id', id);

    if (error) {
      throw new Error(error.message);
    }

    return data ?? null;
  }

  async deleteProduct(id: string): Promise<Product[] | null> {
    const { data, error } = await this.supabase.client
      .from(this.table)
      .delete()
      .eq('id', id);

    if (error) {
      throw new Error(error.message);
    }

    return data ?? null;
  }
}
