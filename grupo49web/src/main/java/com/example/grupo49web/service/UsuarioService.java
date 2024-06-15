package com.example.grupo49web.service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.grupo49web.models.UsuarioModels;
import com.example.grupo49web.repositories.UsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    UsuarioRepository usuarioRepository;

    // guardar datos personas
    public UsuarioModels guardarUsuario(UsuarioModels usuario) {
        return usuarioRepository.save(usuario);
    }

    // buscar dato por id
    public Optional<UsuarioModels> obtenerusuarioId(Long Id) {
        return usuarioRepository.findById(Id);

    }

    // buscar datos por prioridad
    public ArrayList<UsuarioModels> obtenerusuarioprioridad(Integer prioridad) {
        return usuarioRepository.findByPrioridad(prioridad);

    }

    // buscar datos por telefono
    public ArrayList<UsuarioModels> obtenerusuariotelefono(String telefono) {
        return usuarioRepository.findBytelefono(telefono);

    }

    // buscar datos por email
    public ArrayList<UsuarioModels> obtenerusuarioemail(String email) {
        return usuarioRepository.findByemail(email);
    }

    // buscar datos por nombre
    public ArrayList<UsuarioModels> obtenerusuarionombre(String nombre) {
        return usuarioRepository.findBynombre(nombre);
    }

    // buscar datos por email y password
    public Optional<UsuarioModels> buscarPorEmailYPassword(String email, String password) {

        Optional<UsuarioModels> usuario = usuarioRepository.findByEmailAndPassword(email, password);

        if (usuario.isPresent()) {
            return usuario;
        } else {
            return Optional.empty(); // me devuelve null si no encuentra usuario
        }
    }

    // listar usuarios
    public ArrayList<UsuarioModels> obtenerusuarios() {
        return (ArrayList<UsuarioModels>) usuarioRepository.findAll();
    }

    // eliminar persona
    public boolean Eliminar(Long id) {
        try {
            usuarioRepository.deleteById(id);
            return true;
        } catch (Exception er) {
            return false;
        }

    }
}
