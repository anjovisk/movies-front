import { Movie } from './movie';

export class Page {
    page: number;
    total_results: number;
    total_pages: number;
    results: Movie[];
}