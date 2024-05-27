# TaskStream Web App

TaskStream Web App is a platform that allows users to manage projects and tasks easily.

## Setup Instructions
### Installation ###
Go to taskstream folder on your powershell
```bash
cd taskstream
```
Install Composer
```bash
composer install
```

Next Copy .env
```bash
cp .env.example .env
```

Generate application key
```bash
php artisan key:generate
```

Create database
```bash
touch databse/database.sqlite
```

Migrate database
```bash
php artisan migrate
```

### Install Node Modules
Next install all dependencies.
```bash
npm install
```

### Compile the Front-End
Run the production compile script
```bash
npm run build
```
Or for development:
```bash
npm run dev
```

### Start Laravel Server
To start laravel, run the following code 
```bash
php artisan serve
```

<!-- ## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT). -->
