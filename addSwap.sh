#!/usr/bin/env bash
#
# Adds a swap file to the cloud build environment (travis-ci)
#
sudo dd if=/dev/zero of=/swapfile bs=1024 count=524288 &&
sudo chown root:root /swapfile &&
sudo chmod 0600 /swapfile &&
sudo mkswap /swapfile &&
sudo swapon /swapfile