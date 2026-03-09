const labels = (arr) => {

    const labelWord = arr.map(word => {

        if (word === 'bug') {
            return `<span class="btn uppercase bg-red-100 text-red-500 rounded-full">
            <img class="w-[2em]" src="./assets/BugDroid.png" />
            ${word}
            </span>`;
        }

        else if (word === 'help wanted') {
            return `<span class="btn uppercase bg-yellow-100 text-yellow-500 rounded-full">
            <img class="w-[2em]" src="./assets/Vector.png" />
            ${word}
            </span>`;
        }

         else if (word === 'enhancement') {
            return `<span class="btn uppercase bg-green-100 text-green-500 rounded-full">
            <img class="w-[2em]" src="./assets/Vector (1).png" />
            ${word}
            </span>`;
        }

        else if (word === 'documentation') {
            return `<span class="btn uppercase bg-sky-100 text-sky-500 rounded-full">
            ${word}
            </span>`;
        }


        else {
            return `<span class="btn rounded-full">${word}</span>`;
        }

    });

    return labelWord.join(" ");
}