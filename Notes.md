### Notes

**_Mi 25 Oct 23_**

Unset the following function:

function strCount(str, letter) {
return str.split(letter).length - 1;
}

And this one:

const strCount = (str, letter) => str.split('').filter(el => el === letter).length
