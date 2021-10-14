<template>
    <v-navigation-drawer :value="value" @input="$emit()"></v-navigation-drawer>
</template>

<script>
data: () => ({
    items: [
        {
            title: "Inicio",
            icon: "mdi-home",
            to: "/home",
            
        },
        {
            title: "Cursos",
            icon: "mdi-apps",
            to: "/cursos",
        },
    ]
}) 
</script>
