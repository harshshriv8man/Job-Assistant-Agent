import React from "react";

function Report({ aiReport }: any) {
    return (
        <>
            <h2 className="text-3xl font-extrabold text-gray-800 gradient-component-text">AI Analysis Results</h2>

            <button type="button" className="text-gray-500 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 gradient-button-bg text-white shadow-lg">
                Re-analyze <i className="fa-solid fa-sync ml-2"></i>
            </button>

            {/* Overall Score */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-blue-200 transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
                <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center">
                    <i className="fas fa-star text-yellow-500 mr-2"></i> Overall Score
                </h3>

                <div className="flex items-center justify-between mb-4">
                    <span className="text-6xl font-extrabold text-blue-600">{aiReport?.overall_score}<span className="text-2xl">/100</span></span>

                    <div className="flex items-center">
                        <i className="fas fa-arrow-up text-green-500 text-lg mr-2"></i>
                        <span className="text-green-500 text-lg font-bold">{aiReport?.overall_feedback}</span>
                    </div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${aiReport?.overall_score}%` }}></div>
                </div>

                <p className="text-gray-600 text-sm">{aiReport?.summary_comment}</p>
            </div>

            {/* Section Ratings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Contact Info */}
                <div className="bg-white rounded-lg shadow-md p-5 border border-green-200 relative overflow-hidden group">
                    <h4 className="text-lg font-semibold text-gray-700 mb-3"><i className="fas fa-user-circle text-gray-500 mr-2"></i> Contact Info</h4>
                    <span className="text-4xl font-bold highlight-text">{aiReport?.sections?.contact_info?.score}%</span>
                    <p className="text-sm text-gray-600 mt-2">{aiReport?.sections?.contact_info?.comment}</p>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Experience */}
                <div className="bg-white rounded-lg shadow-md p-5 border border-green-200 relative overflow-hidden group">
                    <h4 className="text-lg font-semibold text-gray-700 mb-3"><i className="fas fa-briefcase text-gray-500 mr-2"></i> Experience</h4>
                    <span className="text-4xl font-bold highlight-text">{aiReport?.sections?.experience?.score}%</span>
                    <p className="text-sm text-gray-600 mt-2">{aiReport?.sections?.experience?.comment}</p>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Education */}
                <div className="bg-white rounded-lg shadow-md p-5 border border-yellow-200 relative overflow-hidden group">
                    <h4 className="text-lg font-semibold text-gray-700 mb-3"><i className="fas fa-graduation-cap text-gray-500 mr-2"></i> Education</h4>
                    <span className="text-4xl font-bold warning-text">{aiReport?.sections?.education?.score}%</span>
                    <p className="text-sm text-gray-600 mt-2">{aiReport?.sections?.education?.comment}</p>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Skills */}
                <div className="bg-white rounded-lg shadow-md p-5 border border-red-200 relative overflow-hidden group">
                    <h4 className="text-lg font-semibold text-gray-700 mb-3"><i className="fas fa-lightbulb text-gray-500 mr-2"></i> Skills</h4>
                    <span className="text-4xl font-bold danger-text">{aiReport?.sections?.skills?.score}%</span>
                    <p className="text-sm text-gray-600 mt-2">{aiReport?.sections?.skills?.comment}</p>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
            </div>

            {/* Tips & Improvements */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center">
                    <i className="fas fa-lightbulb text-orange-400 mr-2"></i> Tips for Improvement
                </h3>

                <ol className="list-none space-y-4">
                    {aiReport?.tips_for_improvement?.map((tip: string, index: number) => (
                        <li key={index} className="flex items-start">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-3"><i className="fas fa-check"></i></span>
                            <div>
                                <p className="font-semibold text-gray-800">{tip}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>

            {/* What's Good / Needs Improvement */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* What's Good */}
                <div className="bg-white rounded-lg shadow-md p-5 border border-green-200">
                    <h3 className="text-lg font-bold text-gray-700 mb-3 flex items-center">
                        <i className="fas fa-hand-thumbs-up text-green-500 mr-2"></i> What's Good
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
                        {aiReport?.whats_good?.map((good: string, index: number) => (
                            <li key={index}>{good}</li>
                        ))}
                    </ul>
                </div>

                {/* Needs Improvement */}
                <div className="bg-white rounded-lg shadow-md p-5 border border-red-200">
                    <h3 className="text-lg font-bold text-gray-700 mb-3 flex items-center">
                        <i className="fas fa-hand-thumbs-down text-red-500 mr-2"></i> Needs Improvement
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
                        {aiReport?.needs_improvement?.map((improvement: string, index: number) => (
                            <li key={index}>{improvement}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-blue-600 text-white rounded-lg shadow-md p-6 mb-6 text-center gradient-button-bg">
                <h3 className="text-2xl font-bold mb-3">Ready to refine your resume? 💪</h3>
                <p className="text-base mb-4">Make your application stand out with our premium insights and features.</p>
                <button type="button" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-blue-600 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                    Upgrade to Premium <i className="fas fa-arrow-right ml-2 text-blue-600"></i>
                </button>
            </div>
        </>
    );
}

export default Report;
