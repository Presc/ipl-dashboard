package io.prescot.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import io.prescot.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {
    
    Team findByTeamName(String teamName);
    
}
