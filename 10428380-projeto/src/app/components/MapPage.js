'use client'
import React, { useState } from 'react';
function MapPage() {
    return (
      <div>
        <h1 className='findacenter'>Encontre os Centros de Apoio a partir do Mapa:</h1>
        <iframe title="Mapa de Higienópolis, São Paulo" width="100%" height="700" loading='lazy' allowFullScreen src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.239695574176!2d-46.65624468472896!3d-23.5461664846808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58cde41618d1%3A0xed5038f90c2a4c0!2sUniversidade%20Presbiteriana%20Mackenzie%20-%20Higien%C3%B3polis!5e0!3m2!1sen!2sbr!4v1617982787875!5m2!1sen!2sbr" style={{ border: 0 }}></iframe>
      </div>
    );
  }

  export default MapPage;