const subjects = [

    "Mathematics",

    "Science",

    "Social Science",

    "English",

    "Hindi",

    "Sanskrit",

    "Information Technology (IT)"

];


const params =
    new URLSearchParams(
        window.location.search
    );


const course =
    params.get("course");


const names = {

    class8: "Class 8",

    class9: "Class 9",

    class10: "Class 10"

};


document.getElementById(
    "courseTitle"
).textContent =
    names[course] || "Course";


const container =
    document.getElementById("subjects");


subjects.forEach(subject => {

    const encoded =
        encodeURIComponent(subject);


    container.innerHTML += `

        <a
            class="subject-card"
            href="subject.html?course=${course}&subject=${encoded}"
        >

            <h2>${subject}</h2>

            <p>
                View chapters and lessons
            </p>

        </a>

    `;

});
