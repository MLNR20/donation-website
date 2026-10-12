

//create pagination interface for server side

export interface IPagination {
    page: number;
    limit: number;
    totalPages: number;
    totalItems: number;
}
