$(document).ready(function () {
    $('button').click(function () { 
        //Variable pour récupérer les valeurs de mes inputs.
        let firstNameValue = $('#firstName').val();
        let lastNameValue = $('#lastName').val();
        let mailValue = $('#mail').val();
        let phoneNumberValue = $('#phoneNumber').val();

        //je crée les régex
        /*
        REGEX firsNameReg et lastNameReg
        - le nom doit impérativement commencer par un caractère majuscule (caractère spéciaux compris) suivi de minuscule ou d'une apostrophe.
        - je crée une sous classe qui contien également une chaine de caractères avec un tiret (pour les prénoms composés)
        - le + rend oblihgatoire ce qui précède.
        - les () font des sous classes.
        - le ? précise que ce qui précède n'est pas pas obligatoire
        */
        let firstNameReg = /^[A-ZÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ][a-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšž']+([-][A-Z][a-z]+)?$/;
        let lastNameReg = /^[A-ZÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð][a-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšž']+([-][A-Z][a-z]+)?$/;
        
        /*
        REGEX du mail
        - le mail doit être en minuscule 
        -peut commencer par un chiffre ou - _ et. 
        -suivi d'un @
        - puis de lettre minuscule, chiffre ou .-_
        - le quanificateur {2,} oblige un min de 2 caractères et +
        - l'atislash \ permet d'interpréter le point comme tel
        - le quantificateur {2,4} limite le nombre de caractères dans la chaine de caratère qui précède ici min:2 max:4
        */
        let mailReg = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9-_]{2,}[.][a-zA-Z]{2,4}$/;

        /*
        REGEX du téléphone
        */
        let phoneNumberReg = /^(06|07)[0-9]{8}$/; 


        //SI les valeurs des inputs firstName et lastName ne correspondent pas a la régex, un border rouge apparait
        if(firstNameReg.test(firstNameValue) == false){
            $('#firstName').css('border', '2px solid red');
        }else{
            $('#firstName').css('border', '2px solid green');
        }
        if(lastNameReg.test(lastNameValue) == false){
            $('#lastName').css('border', '2px solid red');
        }else{
            $('#lastName').css('border', '2px solid green');
        }
        if(mailReg.test(mailValue) == false){
            $('#mail').css('border', '2px solid red');
        }else{
            $('#mail').css('border', '2px solid green');
        }
        if(phoneNumberReg.test(phoneNumberValue) == false){
            $('#phoneNumber').css('border', '2px solid red');
        }else{
            $('#phoneNumber').css('border', '2px solid green');
        }

    });

});