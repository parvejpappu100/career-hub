import { getShoppingCart } from "../../utilities/fakeDb";

const appliedJobsLoader = async () =>{
    const loaderJobs = await fetch("jobs.json");
    const jobs = await loaderJobs.json();

    const storedJobs = getShoppingCart();
    const savedJobs = [];
    
    for (const id in storedJobs){
        const appliedJobs = jobs.find(job => job.id == id);
        if(appliedJobs){
            const quantity = storedJobs[id];
            appliedJobs.quantity = quantity;
            savedJobs.push(appliedJobs);
        }
    }

    return savedJobs;
}

export default appliedJobsLoader;