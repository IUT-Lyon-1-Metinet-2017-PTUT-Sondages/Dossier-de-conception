# [LP Metinet][PTUT] Application de sondages

[Dossier de conception](dossier-de-conception.pdf)

## Site web

Utiliser Apache/nginx, ou alors le serveur built-in de PHP pendant le développement : 

```
$ cd website
$ composer install
$ php artisan key:generate
$ php artisan serve
```

## Application Android

L'application Android a été créée par les LP IEM, mais elle n'est pas 
entièrement terminée (communication avec le serveur).
