

export interface iCauseRepo {
    createCause(causeData: any): Promise<any>;
    getCauseById(causeId: string): Promise<any>;
    getAllCauses(): Promise<any[]>;
    updateCause(causeId: string, causeData: any): Promise<any>;
    deleteCause(causeId: string): Promise<void>;
    retrieveActiveUser(userId: string): Promise<any>;
} 