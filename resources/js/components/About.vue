<template>
    <section id="about" class="content-section text-center">
        <div class="container">
            <h1>About</h1>
            <hr>
            <div class="row">
                <div class="col-3 col-lg-2 mb-3 mx-auto ml-lg-auto mr-lg-0">
                    <transition name="fade">
                        <img class="img-fluid rounded" :src="me" v-if="displayImg">
                    </transition>
                </div>
                <div class="col-lg-6 mr-auto">
                    <p>I am a {{ age }} year old DevOps Engineer and Software Developer from Oklahoma City, OK. I graduated with my B.S. in Computer Science from the University of Central Oklahoma.</p>
                    <p>I enjoy scripting things together, writing websites which have an easy-to-use interface, tinkering with self-hosted home automation, and just overall playing with technology!</p>
                    <p><router-link to="/connect">Let me know if you have any questions!</router-link></p>
                </div>
            </div>
            <hr>
        </div>
        <div id="map">
            <transition name="fade">
                <gmap-map ref="map" :center="mapCenter" :options="mapOptions" style="width: 100%; height: 100%"></gmap-map>
            </transition>
        </div>
    </section>
</template>

<script>
import preloadImage from '../preloadImage'

export default {
    data() {
        return {
            age : '',
            displayImg: false,
            mapCenter: { lat: 35.46756, lng: -97.516428 },
            mapOptions: {
                zoom: 11,
                disableDefaultUI: true,
                scrollwheel: false,
                draggable: false,
                disableDoubleClickZoom: true,
                backgroundColor: '#222',
                styles: [
                    {
                        "stylers": [
                            {
                                "hue": "#607d8b"
                            },
                            {
                                "saturation": 10
                            },
                            {
                                "invert_lightness": true
                            },
                            {
                                "lightness": 20
                            },
                            {
                                "gamma": 0.7
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.land_parcel",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.business",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    }
                ]
            },
            me: '/images/me.jpg',
        }
    },
    created() {
        this.$Progress.start()

        var birthday = +new Date('1995-05-26')
        this.age = ~~((Date.now() - birthday) / (31557600000))

        preloadImage(this.me)
            .then(() => {
                this.displayImg = true
                this.$Progress.finish()
            })
            .catch(() => {
                this.$Progress.fail()
            })
    }
}
</script>
