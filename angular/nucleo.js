angular.module('MainApp',[]);

function controladorPrincipal($scope, $http){
    $scope.areas ={};
    $scope.areas ={};
    $http.get('/api/areas').success(function(data){
        $scope.areas = data;
        console.log(data);
    }).error(function(data){
        console.log('Error: ' + data);
    });

    //Agregar una nueva area
    $scope.registrarArea =function(){
        $http.post('/api/area',$scope.newArea)
            .success(function(data){
                $scope.newArea= {}; //borramos los datos del formulario
                $scope.areas =data;
            })
            .error( function(data){
                console.log('Error: ' + data);
            });
    };
    // Tomar el objeto selecionado de la tabla 
    $scope.selectArea = function(area){
        $scope.newArea = area;
        $scope.selected =true;
        console.log($scope.newArea,$scope.selected);
    };
    //Editar una area
    $scope.modificarArea =  function(newArea){
        $http.put('/api/area/'+ $scope.newArea._id,$scope.newArea)
            .success(function(data){
                $scope.newArea  ={};
                $scope.areas    =data;
                $scope.selected =false;
            })
            .error (function(data){
            cosole.log('Error: '+ data);
        });
    };
     //Elimina una area
    $scope.borrarArea = function(newArea){
    $http.delete('/api/area/'+ $scope.newArea._id)
    .success(function(data){
        $scope.newArea  ={};
        $scope.areas    =data;
        $scope.selected =false;
    })
    .error (function(data){
        console.log('Error: '+data);
    });
  };
}

