//Експортує функцію звукового програвача

export const playSound = (audioName) => {
    let audio = new Audio(audioName);
    audio.play();
}