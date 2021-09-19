import sideImg from "../../images/bucky.png"
function Home () {
    return (
        <div className='container p-4'>
            <h1 className="pb-5">Home</h1>
            <div className='row'>
                <div className='col-md-6'>
                    <p>Our app, Brokers, is intended for College/High school students. 'Brokers' allows a student to track their financial balance using our state of the art algorithms. The personalized algorithms enable users to track and log their previous financial logs and project future expenses.  The secondary usage of the app extends beyond the traditional expense tracking app and venture into scholarship assistance. Under the "Scholarship" tab, our web scraping algorithm uses the user permitted info and gathers relevant scholarships that the user might qualify for. The "Scholarship" section aims to promote better financial awareness among students, to encourage seek out many means of income to achieve higher education. The final phase of the app is to integrate the Scholarship feature with the financial section and allows the user to see their current and projected financial balance, given different scholarship possibilities. We aim to promote financial awareness in higher education through technology, alleviating the stress for many college students.
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