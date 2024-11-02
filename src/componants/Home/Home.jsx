
import Banner from './../Banner/Banner';
import JobCategoryList from './../JobCategoryList/JobCategoryList';
import FeaturedJobs from './../FeaturedJobs/FeaturedJobs';
function Home() {
    return (
        <div className="w-11/12 mx-auto min-h-[620px]">
            <Banner></Banner>
            <JobCategoryList></JobCategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    )
}

export default Home;
