<template>
    <h1>Planlanmış Toplantılar</h1>
    <br><br>
    <div class="card">
        <div class="ui-fluid formgrid grid">
            <div class="field col">
                <div class="field">
                    <label for="meeting_code" class="form-label">Toplantı Kodu:</label>
                    <br><br>
                    <InputText style="width: 675px;" v-model="value" size="large" type="text" name="meeting_code" class="form-control" required/>
                </div>
            </div>
        </div>
        <div class="ui-fluid formgrid grid">
           <div class="field col">
              <div class="field">
                <label for="username" class="form-label">İsim:</label>
                   <br><br>
                  <InputText style="width: 675px;" v-model="value" size="large" type="text" name="username" class="form-control" required/>
              </div>
          </div>
        </div>
        <Button type="submit" class="btn btn-primary" @click="">Takvimi Göster</Button>
    </div>
</template>

<script setup>



import InputText from "primevue/inputtext";
import Button from "primevue/button";

</script>


