import "./Education.css"

const Educaton = () => {
    return (
        <div>
            <div className="text-center space-y-4 mt-20">
                <h1 className="text-4xl font-semibold text-[#f75023]">Education</h1>
            </div>

            <div className="mt-10">
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10 text-white p-5 rounded-lg back">
                            <time className="font-mono italic">2015-2020</time>
                            <div className="text-lg font-black">Sadar Narottompur High School</div>
                            Group: Science
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end mb-10 text-white p-5 rounded-lg back">
                            <time className="font-mono italic">2021-2024</time>
                            <div className="text-lg font-black">Lakshmipur Polytechnic Institute</div>
                            Computer Science and Technology
                        </div>
                        <hr />
                    </li>
                    <li>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10 text-white p-5 rounded-lg back">
                            <time className="font-mono italic">2021-2023</time>
                            <div className="text-lg font-black">Kabirhat Govt Collage</div>
                            Group: Science
                        </div>
                        <hr />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Educaton;