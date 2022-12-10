//lecture/week 3 video timestamp 28:00
const cols12 = document.querySelector(".cols12");

document.addEventListener("DOMContentLoaded", function() {
    //Nav Menu
    const menus = document.querySelectorAll("Nav");
    M.Sidenav.init(menus, { edge: "right" });
    // Add Questions
    const forms = document.querySelectorAll(".qs");
    M.Sidenav.init(forms, { edge: "left" });
});

/*const renderTask = (data, id) => {
    const html = `<div class="cols12">
    <div id="qs" class="questions">
        <h3>Questions</h3>
        <!--here is where you connect javascript function to choices-->
        <form action="" method="POST">

            <label for="leftHome">*when was the last time you left home?</label>
            <br>
            <br>
            <input type="radio" id="yesterday" name="leftHome" value="YESTERDAY">
            <label for="yesterday">Yesterday</label><br>
            <input type="radio" id="a week ago" name="leftHome" value="A WEEK AGO">
            <label for="a week ago">A week Ago</label><br>
            <input type="radio" id="a month ago" name="leftHome" value="A MONTH AGO">
            <label for="a month ago">A month ago</label>
            <br>
            <br>

            <label for="physique">*How do you describe your physique?</label>
            <br>
            <br>
            <input type="radio" id="athletic" name="physique" value="ATHLETIC">
            <label for="athletic">Athletic</label><br>
            <input type="radio" id="average" name="physique" value="AVERAGE">
            <label for="average">Average</label><br>
            <input type="radio" id="foodie" name="physique" value="FOODIE">
            <label for="foodie">Foodie</label>
            <br>
            <br>

            <label for="activity">*what type of activity do you want to engage in?</label>
            <br>
            <br>
            <input type="radio" id="adrenaline" name="activity" value="ADRENALINE">
            <label for="adrenaline">Adrenaline</label><br>
            <input type="radio" id="relaxing" name="activity" value="RELAXING">
            <label for="relaxing">Relaxing</label><br>
            <input type="radio" id="loud" name="activity" value="LOUD">
            <label for="loud">Loud</label>
            <br>
            <br>


            <!--<input type="submit" value="Submit"></form> 



            <button id="yesterday">
                Submit
            </button> -->

            <input type="button" onclick="RespondClick()" value="Submit">
            <br>




    </div>`;

    cols12.innerHTML + html;
    
};
*/