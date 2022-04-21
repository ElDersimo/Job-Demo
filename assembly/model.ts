import { Context, PersistentVector } from "near-sdk-as";
import {AccountId} from "../utils"

export let jobs = new PersistentVector<Job>('j')

@nearBindgen
export class Job{

    owner: AccountId;
    work: string
    details:string
    
constructor(work:string, details:string) {
    this.owner= Context.sender
    this.work= work
    this.details=details

}
}

