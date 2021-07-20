motions = [
    {
        direction: "forwards",
        speed: 90,
    }
]

const go = (carMotion) => {
    for (const motion of motions)
    if (motion.speed >= 80) 
    {return `SLOW DOWN!`
}  else {
    return `The car is moving ${motion.direction} at ${motion.speed} mph.`
}
}

console.log(go())

