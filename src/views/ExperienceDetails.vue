<template>
    <div>
        <h1>Experiences</h1>
        <h2>{{experience.name}}</h2>
        <div class="experience-details">
            <img 
            :src="require(`@/assets/${experience.image}`)" 
            :alt="experience.name"
            />
            <span>{{experience.description}}</span>
        </div>
    </div>
</template>

<script>
import Store from '@/store.js'
    export default {
        data(){
            return {

            }
        },
        computed: {
            destination(){
                return Store.destinations.find(
                    destination => destination.slug === this.$route.params.slug
                )
            },
            experience(){
                return this.destination.experiences.find(
                    experience => experience.slug === this.$route.params.experienceSlug
                )
            }
        }
    }
</script>

<style scoped>
.experience-details{
    display: flex;
    justify-items: center;
}
img{
    max-width: 500px;
}
</style>