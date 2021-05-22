import {ref} from 'vue'

const useTags = (posts)=>{

    const tags = ref([]);
    const tagSet = new Set();
    console.log(posts);
    posts.forEach((p)=>p.tags?.forEach(tag => tagSet.add(tag)));
    
    tags.value = [...tagSet];
    return {tags};
}

export default useTags