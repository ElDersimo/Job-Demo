import {Job, jobs } from "./model";
import { AccountId } from "../utils";


export function createJob(work:string, details:string, ):void{ // You can add job
    let job = new Job(work, details, )
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

export function deleteJob(): void { //Delete last job
  jobs.pop()
}

