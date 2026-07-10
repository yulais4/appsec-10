<script>
export default {
    data() {
        return {
            spichkiPrise : 2,
            spichkiSklad : 50,
            spichkiCounter : 0,

            hlebPrise : 15,
            hlebSklad : 15,
            hlebCounter : 0,

            vodkaPrise : 300,
            vodkaSklad : 10,
            vodkaCounter : 0,

            uazPrise : 1448000,
            uazSklad : 1,
            uazCounter : 0,

            iphonePrise : 140000,
            iphoneSklad : 0,
            iphoneCounter : 0,
        }
    },

    methods: {
        async sendData() {
            const response = await $fetch('/api/sklad1', {
                method: 'POST',
                body: {
                    spichki : this.spichkiCounter
                }
            })
            if (response.success){
                alert("Куплено!")
            }
            else {
                alert("Ошибка")
            }
        }
    }
}
</script>


<template>
    <h1>Ларёк "Наташка"</h1>
    <h3>Корзина. БЫЧКИ В КОРЗИНУ НЕ КИДАТЬ!!!</h3>

    <form action="" method="post" @submit.prevent="sendData">
        <label for="spichki">Спички. Остаток - {{ spichkiSklad }}. Стоимость - {{ spichkiPrise }} руб.</label><br>
        <input type="number" name="spichki" id="spichki" v-model="spichkiCounter">
        <br>
        <label for="hleb">Хлеб ржаной. Остаток - {{ hlebSklad }}. Стоимость - {{ hlebPrise }} руб.</label><br>
        <input type="number" name="spichki" id="spichki" v-model="hlebCounter">
        <br>
        <label for="vodka">Водка "Экстра". Остаток - {{ vodkaSklad }}. Стоимость - {{ vodkaPrise }} руб.</label><br>
        <input type="number" name="spichki" id="spichki" v-model="vodkaCounter">
        <br>
        <label for="uaz">УАЗ Председатель. Остаток - {{ uazSklad }}. Стоимость - {{ uazPrise }} руб.</label><br>
        <input type="number" name="spichki" id="spichki" v-model="uazCounter">
        <br>
        <label for="iphone">Айфон 17 Про. Остаток - {{ iphoneSklad }}. Стоимость - {{ iphonePrise }} руб.</label><br>
        <input type="number" name="spichki" id="spichki" v-model="iphoneCounter">
        <br>
        <button type="submit">Купить</button>
    </form>

    <br>
    <p>Общая сумма: {{ spichkiPrise * spichkiCounter + hlebPrise * hlebCounter + vodkaPrise * vodkaCounter + uazPrise * uazCounter + iphonePrise * iphoneCounter}}</p>
</template>