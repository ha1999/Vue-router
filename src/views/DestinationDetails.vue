<template>
    <div>
        <GoBack />
        <section class="destination">
        <h1>{{destination.name}}</h1>
        <div class="destination-details">
            <img :src="require(`@/assets/${destination.image}`)" alt="">
            <p>{{destination.description}}</p>
        </div>
        </section>
        <section class="expriences">
            <h2>Top experiences in {{destination.name}}</h2>
            <div class="cards">
                <span v-for="experience in destination.experiences" 
                :key="experience.slug" 
                class="card">
                    <router-link 
                        :to="{
                            name: 'experienceDetails',
                            params: {experienceSlug: experience.slug}

                    }">
                        <img 
                        :src="require(`@/assets/${experience.image}`)" 
                        :alt="experience.name"
                        />
                        <span class="card__text">
                            {{experience.name}}
                        </span>
                    </router-link>
                </span>
            </div>
            <router-view />
        </section>
    </div>
</template>

<script>
import Store from '@/store.js'
import GoBack from '@/components/GoBack'
    export default {
        data () {
            return {

            }
        },
        components: {
            GoBack
        },
        props:{
            slug: {
                type: String,
                required: true
            }
        },
        computed:{
            destination(){
                return Store.destinations.find(
                    destination => destination.slug === this.slug
                )
            }
        },
        mounted (){
            console.log(this.$route.params.slug)
        }
    }
</script>

<style scoped>
img{
    max-width: 600px;
    height: auto;
    width: 100%;
    max-height: 400px;
}
.destination-details{
    display: flex;
    justify-content: space-between;
}
p{
    margin:  0 40px;
    font-size: 20px;
    text-align: left;
}
.cards{
    display: flex;
    justify-items: center;
}
.card img{
    max-height: 200px;
}
.card{
    padding: 0 20px;
    position: relative;
}
.card__text{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-decoration: none;
    font: 25px bold
}
</style>