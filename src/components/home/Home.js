import sideImg from "../../images/bucky.png"
function Home () {
    return (
        <div className='container p-4'>
            <h1 className="pb-5">Home</h1>
            <div className='row'>
                <div className='col-md-6'>
                    <p>Our app, Brokers, is intended for College/High school students. ‘Brokers’ is a React JS web application that helps students find more scholarships to finance their education by pulling scholarships from multiple sources using web scraping tools like Scrapy. The links to all scholarships are provided on the Scholarship page.
                    </p>
                </div>
                <div className='col-md-6'>
                    <img alt="UW-Madison mascot bucky with University of Wisconsin-Madison written above." src={sideImg}></img>
                </div>
            </div>
        </div>
    );
}

export default Home;