<template>
    <h1>Toplantı Oluştur</h1>
    <br><br>
    <div class="card">
        <div class="ui-fluid formgrid grid">
            <div class="field col">
                <div class="field">
                  <label for="title" class="form-label">Başlık:</label>
                  <br><br>
                  <InputText style="width: 675px;" v-model="value" size="large" type="text" class="form-control" name="title" required/>
                </div>
            </div>
        </div>
        <div class="ui-fluid formgrid grid">
            <div class="field col">
                <div class="field">
                   <label for="description" class="form-label" >Açıklama:</label>
                   <br><br>
                  <Textarea class="form-control" name="description" rows="3" cols="100" required></Textarea>
                </div>
            </div>
        </div>
        <div class="ui-fluid formgrid grid">
            <div class="field col">
                <div class="field">
                  <label for="date" class="form-label">Tarih:</label>
                  <br><br>
                  <Calendar style="width: 675px; height: 45px;" v-model="buttondisplay" showIcon />
               </div>
            </div>
        </div>
        <Button type="submit" class="btn btn-primary" @click="">Toplantı Oluştur</Button>
    </div>
</template>

<script setup>


import Calendar from "primevue/calendar";
import Textarea from "primevue/textarea";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

</script>





