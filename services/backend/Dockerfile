FROM php:7.4-alpine
ARG uid=1000
ARG user=sammy

RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-install mysqli mbstring exif pcntl bcmath gd

# Create system user to run Composer commands
#RUN useradd -G www-data,root -r $uid -d /home/$user $user
#RUN mkdir -p /home/$user/.composer && \
#    chown -R $user:$user /home/$user

# Install Composer
#COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy application source
COPY index.php /var/www/html/
COPY ./src /var/www/html/src/
#COPY sites-available/000-default.conf /etc/apache2/sites-available/000-default.conf
RUN a2enmod rewrite

#RUN curl -sS https://getcomposer.org/installer
#RUN php -- --install-dir=/usr/local/bin --filename=composer
RUN echo "AllowEncodedSlashes On" >> /etc/apache2/apache2.conf
RUN chown -R/ www-data:www-data /var/www/html

WORKDIR /var/www/html

USER $user

#CMD ["scripts/install-composer"]