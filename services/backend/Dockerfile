FROM php:7.4-apache

RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip
COPY 000-default.conf /etc/apache2/sites-available/000-default.conf
COPY ./index.php /var/www/html/index.php
COPY ./src /var/www/html/src
COPY start-apache /usr/local/bin
RUN docker-php-ext-install mysqli pdo
RUN apachectl restart
RUN a2enmod rewrite
RUN echo "AllowEncodedSlashes On" >> /etc/apache2/apache2.conf
RUN chown -R www-data:www-data /var/www

CMD ["start-apache"]

#ARG uid=1000
#ARG user=oscar

# Create system user to run Composer commands
#RUN useradd -G www-data,root -r $uid -d /home/$user $user
#RUN mkdir -p /home/$user/.composer && \
#    chown -R $user:$user /home/$user

# Install Composer
#COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

#RUN curl -sS https://getcomposer.org/installer
#RUN php -- --install-dir=/usr/local/bin --filename=composer


WORKDIR /var/www/html

USER $user
#CMD ["scripts/install-composer"]
EXPOSE 80
