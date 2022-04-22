import { Context,PersistentVector, u128 } from "near-sdk-as";
import {AccountId, Money} from "../utils"

export let jobs = new PersistentVector<Job>('j')

@nearBindgen
export class Job{

    owner: AccountId;
    work: string
    details:string
    salary:Money 
    /*Salary in yocto Ⓝ as an unsigned 128-bit integer
    toYocto(15) => 15000000000000000000000000*/

constructor(work:string, details:string, salary:Money) {
    this.owner= Context.sender
    this.work= work
    this.details=details
    this.salary= salary
}

}

export const ONE_NEAR = u128.from("1000000000000000000000000");
export function toYocto(salary:Money): u128 {
    return u128.mul(ONE_NEAR, u128.from(salary))
  }
