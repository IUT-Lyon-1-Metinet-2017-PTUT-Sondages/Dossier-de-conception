<?php

namespace AppBundle\Services;

class PollRepositoryService
{
    private $em;

    public function __construct(\Doctrine\ORM\EntityManager $entityManager)
    {
        $this->em = $entityManager;
    }

    public function createPoll($poll)
    {
            $this->em->persist($poll);
            $this->em->flush();

            return true;

    }

    public function getPolls($filter)
    {
            return $this->em->getRepository('AppBundle:Poll')->findBy($filter);


    }

    public function getPoll($filter)
    {
            return $this->em->getRepository('AppBundle:Poll')->findOneBy($filter);

    }


    public function deleteById($id)
    {
            $poll = $this->em->getRepository('AppBundle:Poll')->findOneBy(['id'=>$id]);
            $this->em->remove($poll);
            $this->em->flush();

            return true;

    }

}
