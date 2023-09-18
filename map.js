// "use strict";

console.log("ok");
const mapInteractive2 = (countries) => {
	const colors = ['white', '#34365F', 'yellow'];

	for (let country of countries) {
    country = document.getElementById(country);
    console.log(country);
		if (!country)
			continue;
    country.addEventListener('click', () => {
      country.remove();
    });
	}
}

mapInteractive2([
  "fosforo",
  "fosforo-1",
  "fosforo-2",
  "fosforo-3",
  "fosforo-4",
  "fosforo-5",
  "fosforo-6",
  "fosforo-7",
  "fosforo-8",
  "fosforo-9",
  "fosforo-10",
  "fosforo-11",
  "fosforo-12",
  "fosforo-13",
  "fosforo-14",
  "fosforo-15"
]);