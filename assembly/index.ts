import {Job, jobs, toYocto } from "./model";
import { AccountId, assert_self, assert_single_promise_success, Money,  } from "../utils";


export function createJob(work:string, details:string, salary:Money):void{ // You can add job
    let job = new Job(work, details, /*toYocto*/(salary))
    jobs.push(job)
}


export function getJobList(owner: AccountId): Array<Job> { //You can view job list
    let list = new Array<Job>();
      for(let z = 0; z < jobs.length; z++) {
      if(jobs[z].owner == owner) {
        list.push(jobs[z])
    }
  }
   return list
   
}

export function deleteJob(work:string): void { //Delete last job
  jobs.pop()
}

