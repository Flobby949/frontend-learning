
const { createApp, ref } = Vue   
        
const app = {
    setup() {
        let number = ref(5)
        function add() {
            number.value++
        };
        function subtract() {
            number.value--
        };
        function reset() {
            number.value = 5
        };
return {number, add, subtract, reset}

    }
}