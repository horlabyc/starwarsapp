<template>
    <div class="uk-alert-danger" uk-alert>
        <a class="uk-alert-close" uk-close></a>
        <p>Error fetching requested resource(s).</p>
    </div>
</template>
<script>
export default {
    name: "Error"
}
</script>
<style lang="scss" scoped>
    .uk-alert-danger {
        margin: 0 auto;
        width: 50%;
    }
</style>