import { iCauseRepo } from "../interfaces/iCauseRepo";
import Cause from "../models/cause";
import genericRepo from "./genericRepo";


export default class CauseRepo extends genericRepo<any> implements iCauseRepo {
  constructor() {
        super(Cause);
  }
    async createCause(causeData: any): Promise<any> { 
        return await this.create(causeData);
    }

    async getCauseById(causeId: string): Promise<any> {
        return await this.findById(causeId);
    }

    async getAllCauses(): Promise<any[]> {
        return await this.findAll();
    }

    async updateCause(causeId: string, causeData: any): Promise<any> {
        return await this.update(causeId, causeData);
    }

    async deleteCause(causeId: string): Promise<void> {
        await this.delete(causeId);
    }

    async retrieveActiveUser(userId: string): Promise<any> {
        return this.findById(userId);
    }
    
}