# 🍵 Tea Shop

Интернет-магазин чая, разработанный на **Angular**.

Проект создан как практическое приложение для работы с Angular-компонентами, маршрутизацией, асинхронной загрузкой данных и переиспользуемыми сервисами.

Основной акцент сделан на структуре Angular-приложения и организации взаимодействия между страницами, сервисами и данными.

---

## ✨ Features

### 🛍️ Product Catalog

* каталог товаров;
* просмотр отдельного товара;
* загрузка данных через HTTP;
* отображение информации о товарах;
* навигация между каталогом и страницей товара.

### 🛒 Shopping Cart

* добавление товара в корзину;
* хранение состояния корзины через Angular service;
* реактивное обновление состояния;
* сохранение данных в `localStorage`.

### 🧭 Routing

В приложении используются:

* Angular Router;
* feature modules;
* lazy loading;
* route parameters;
* route resolvers;
* wildcard route.

Данные каталога и отдельного товара подготавливаются через resolvers до активации соответствующего маршрута.

### 🧩 Shared UI

Переиспользуемые элементы вынесены в `shared`:

* Header;
* Footer;
* custom pipe;
* сервисы;
* UI-компонент модального окна;
* сервис управления модальным окном.

---

## 🏗️ Application Architecture

Приложение разделено на общие элементы и функциональные области:

```text
src/app/
├── shared/
│   ├── components/
│   ├── pipes/
│   ├── services/
│   └── ui/
│
└── views/
    ├── home/
    ├── order/
    └── products/
        ├── catalog/
        └── product/
```

Функциональные области организованы отдельными Angular-модулями.

Для основных разделов приложения используется lazy loading.

---

## 🔄 Data Flow

Общая схема получения данных:

```text
Route
  │
  ▼
Resolver
  │
  ▼
TeaService
  │
  ▼
HttpClient
  │
  ▼
External API
```

Например, `ProductResolver` получает `id` товара из параметров маршрута и запрашивает соответствующий товар через `TeaService`.

---

## 🛒 Cart State

Состояние корзины реализовано через отдельный Angular service:

```text
Component
   │
   ▼
CartService
   │
   ├── BehaviorSubject
   │
   └── localStorage
```

`BehaviorSubject` используется для передачи текущего состояния подписчикам, а `localStorage` позволяет сохранить выбранный товар между перезагрузками страницы.

---

## 🛠️ Tech Stack

### Frontend

* **Angular 14**
* **TypeScript**
* **RxJS**
* **Angular Router**
* **Angular Forms**
* **SCSS**
* **Bootstrap**

### Additional

* **Animate.css**
* **Hover.css**
* **Slick Carousel**
* **Magnific Popup**

---

## 🧠 What this project demonstrates

Проект показывает практическую работу с Angular и его основными механизмами:

* component-based architecture;
* feature modules;
* lazy loading;
* Angular Router;
* route resolvers;
* services;
* dependency injection;
* RxJS;
* `BehaviorSubject`;
* HTTP requests;
* `localStorage`;
* reusable UI components;
* custom pipes.

---

## 📁 Project Structure

```text
tea_shop_angular/
├── src/
│   ├── app/
│   │   ├── shared/
│   │   └── views/
│   ├── assets/
│   └── environments/
├── docs/
├── angular.json
├── package.json
└── README.md
```

---

## 🎯 Project Purpose

Проект создавался для практики разработки Angular-приложений и углубления работы с архитектурой клиентской части.

Основное внимание уделялось не только созданию интерфейса, но и организации приложения:

**компоненты → сервисы → маршрутизация → resolvers → данные**

---

## 🌱 Development Path

Этот проект является одним из этапов моего развития в Angular.

Если `artist` был сосредоточен на **HTML, CSS, JavaScript и визуальной составляющей**, то здесь основной фокус уже на **Angular, TypeScript, RxJS и архитектуре клиентского приложения**.

Следующим этапом стал переход к более сложным приложениям и full-stack разработке.

---

## 📌 Project Status

Проект завершён и используется как демонстрация практического опыта работы с Angular и архитектурой клиентских приложений.
