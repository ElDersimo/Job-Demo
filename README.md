# **JOB PROJECT**

## About
- This project made for two reason one is someone who searching work and other reason who search workers.
- This project made by elDersimo for NDC https://app.patika.dev/eldersimo 
- Project running in **NEAR** platform
- Project is still in a development stage.
- [Loom video link: About Project](https://www.loom.com/share/71e13db7a2874ea78615f0b35706a762)

## Upcoming Updates
- You will be able to get a job
- You will be able to delete your jobs by work
- You will be able to see jobs are available or unavailable
- You will be able to to find your jobs by work


### DOWNLOAD & INSTALL
- You must download the Job-Demo 


>`git clone https://github.com/ElDersimo/Job-Demo` 

![Git Clone](/img/git%20clone.png)

>`cd Job-Demo`
>
> `yarn`

### NEAR
- If you want to use Job-Demo you must have NEAR account. If you doesn't have the account you can create. Please check the link for how to create a NEAR account

[Create Near Account](https://docs.near.org/docs/develop/basics/create-account)

- After you create a account you must login.

> `near login`

![ cd-yarn-login ](/img/cd%20-yarn-login.png)


### BUILD & DEPLOY
- You must build and deploy the smart contract

> `yarn dev`

![yarn dev](/img/yarn%20dev.png)

or you can use this codes

> `yarn build`
>
> `near dev-deploy ./build/release/job.wasm`    

![yarn build & near dev-deploy](/img/yarn%20build%20%26%20near%20dev-deploy.png)

- Export your development account to the $CONTRACT

> `export CONTRACT= <yourDevAccount>`
>>**NOTE**:If you use Windows this code may not work you must write yourDevAccount



## **HOW TO USE?**

-**There are 3 functions on the project**
1. Add your jobs with work, details and salary information.


![createJob](/img/export%20function.png)

> `near call $CONTRACT createJob '{"work":"police", "details":"8-16", "salary":"300"}' --accountId <youraccount.testnet> `
>
>> **NOTE**: If you use Windows this code may not work. Write the code like this: `near call <yourDevAccount> createJob '{"""work""":"""police""", """details""":"""8-16""", """salary""":"""300"""}' --accountId <youraccount.testnet> `


2. **You can see the previous jobs list**

![getJobList](/img/get%20job%20list.png)

> `near view $CONTRACT getJobList '{"owner":"<youraccountid.testnet>"}' `
or
> `near call $CONTRACT getJobList '{"owner":"<youraccountid.testnet>"}' --accountId <youraccount.testnet> `
>
>> **NOTE**: If you use Windows this code may not work. Write the code like this: `near view <yourDevAccount> getJobList '{"""owner""":"""youraccountid.testnet"""}'` or `near call <yourDevAccount> getJobList '{"""owner""":"""<youraccountid.testnet>"""}' --accountId <youraccount.testnet> `


3. **You can delete your last job advertisement**

![deleteJob](/img/deletejob.png)

> `near call $CONTRACT deleteJob --accountId <youraccountid.testnet> `
>
>> **NOTE**: If you use Windows this code may not work. Write the code like this: `near call <yourDevAccount> deleteJob --accountId <youraccountid.testnet> `
