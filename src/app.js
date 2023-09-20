const { container } = require("postcss")



let counter = 0
let currentTourId
let tours = [
    {
        id: counter++,
        title: "Салам, Йошкар-Ола",
        description: "Душевная прогулка по красочной столице Марий Эл в компании городских легенд и нескучных историй",
        date: "Каждую среду, субботу и воскресение",
        time: "12:00",
        price: "1700 ₽",
        image: "./trip-1.jpg",
        rating: 7.8,
    },
    {
        id: counter++,
        title: "Замок Шереметьева",
        description: "На экскурсии вы сможете полюбоваться архитектурой дворянского замка, познакомиться с историей семьи Шереметевых, осмотреть коллекции экспонатов.",
        date: "Каждую субботу и воскресение",
        time: "07:00",
        price: "3000 ₽",
        image: "./trip-2.jpg",
        rating: 8.9,
    },
    {
        id: counter++,
        title: "Козьмодемьянск и 12 стульев",
        description: "Чем же известен Козьмодемьянск? В первую очередь тем, что в 1925 году к причалу города подошел пароход «Герцен», на котором путешествовал корреспондент газеты «гудок» Илья Ильф. Именно с этого времени и начинается превращение Козьмодемьянска в Васюки, ведь многие действия всемирно известного романа «Двенадцать стульев» разворачиваются именно в этом городе.",
        date: "Каждый вторник и воскресение",
        time: "08:00",
        price: "2800 ₽",
        image: "./trip-3.jpg",
        rating: 8.2,
    },
]
const cards = document.getElementById("cards")


function renderTours() {
    cards.innerHTML = ""
    tours.forEach(tour => {
        cards.innerHTML += `
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <div class="p-5">
                    <div>
                        <img class="h-56 w-full" src="${tour.image}" alt="" />
                        <a href="#">
                            <p class="font-semibold mt-3 text-lg text-rose-600">${tour.title} </p>
    
                            <p class="text-grey-400 mt-3">${tour.description}</p>
                        </a>
                        <p class="text-teal-500 font-medium text-sm pt-2">
                            <a href="#">${tour.date}</a>
                        </p>
                    </div>
                    <div class="mt-3 text-grey-400 text-sm flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-rose-600 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span class="ml-1">Длительность:</span>
                        <span class="text-fblack font-medium" >${tour.time}</span>
                    </div>

                    <p class="py-2 text-2xl text-rose-600 font-bold">${tour.price}</p>
                    <button class="btn-primary w-full">Подробнее</button>
                </div>
                
            </div>
            </div>
        `
    })
}
renderTours()

